import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagicalButton } from "@/components/MagicalButton";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, QuizQuestion } from "@/data/quizQuestions";
import { calculateSortingResult } from "@/utils/sortingAlgorithm";
import quizForest from "@/assets/quiz-forest.jpg";
import quizDragon from "@/assets/quiz-dragon.jpg";
import quizArtifacts from "@/assets/quiz-artifacts.jpg";
import quizDuel from "@/assets/quiz-duel.jpg";
import quizMirror from "@/assets/quiz-mirror.jpg";
import quizClassroom from "@/assets/quiz-classroom.jpg";

type HouseScores = {
  gryffindor: number;
  slytherin: number;
  ravenclaw: number;
  hufflepuff: number;
};

interface UserAnswer {
  questionId: number;
  answer: {
    house: "gryffindor" | "slytherin" | "ravenclaw" | "hufflepuff";
    traits: {
      courage?: number;
      ambition?: number;
      intelligence?: number;
      loyalty?: number;
      creativity?: number;
      leadership?: number;
    };
  };
  question: QuizQuestion;
}

export const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const handleAnswer = (answerIndex: number) => {
    const question = quizQuestions[currentQuestion];
    const selectedAnswer = question.answers[answerIndex];
    
    const newAnswer: UserAnswer = {
      questionId: question.id,
      answer: {
        house: selectedAnswer.house,
        traits: selectedAnswer.traits
      },
      question
    };

    const newAnswers = [...userAnswers, newAnswer];
    setUserAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed, calculate comprehensive results
      const sortingResult = calculateSortingResult(newAnswers);
      
      // Store comprehensive result
      sessionStorage.setItem("sortingResult", JSON.stringify(sortingResult));
      navigate("/result");
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];
  
  // Map image imports to question IDs
  const getQuestionImage = (questionId: number) => {
    const imageMap: { [key: number]: string } = {
      1: quizForest,
      2: quizDragon,
      3: quizArtifacts,
      4: quizDuel,
      5: quizMirror,
      6: quizClassroom,
    };
    return imageMap[questionId];
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-magical font-bold text-primary drop-shadow-lg">
            The Sorting Hat Speaks
          </h1>
          <div className="space-y-3">
            <p className="text-muted-foreground font-body text-lg">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </p>
            <Progress value={progress} className="w-full max-w-lg mx-auto h-4 bg-muted/50" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="card-magical overflow-hidden">
          {/* Question Image */}
          {getQuestionImage(question.id) && (
            <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl -m-6 mb-6">
              <img 
                src={getQuestionImage(question.id)} 
                alt="Question illustration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          )}
          
          <div className="space-y-8 p-6 -mt-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-magical font-semibold text-foreground leading-relaxed">
                {question.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {question.answers.map((answer, index) => (
                <MagicalButton
                  key={index}
                  house={answer.house}
                  onClick={() => handleAnswer(index)}
                  className="h-auto p-6 text-left justify-start relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] border-2 border-white/10 hover:border-current/40 bg-black/30 backdrop-blur-md hover:bg-black/40"
                  size="lg"
                >
                  <div className="relative z-20 space-y-3 w-full">
                    <div className="flex items-center gap-4">
                      <div className="font-magical text-lg font-bold bg-white/90 text-black backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="font-body text-lg font-semibold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                        Option {String.fromCharCode(65 + index)}
                      </div>
                    </div>
                    <div className="font-body text-base leading-relaxed text-white/95 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)] pl-14 pr-4 py-2 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10">
                      {answer.text}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </MagicalButton>
              ))}
            </div>
          </div>
        </Card>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-3">
          {quizQuestions.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index <= currentQuestion 
                  ? "bg-primary shadow-[0_0_15px_hsl(var(--primary)_/_0.5)] scale-110" 
                  : "bg-muted/50 hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};