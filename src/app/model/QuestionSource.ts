import { Question } from './Question';
import { Category } from './Category';
// export class QuestionSource {


export const CATEGORIES: Category[] = [
  {
    name: 'monitoring', questions: [
      { body: 'List 3 causes of hyperglycemia (High Blood Sugar)', answer: '', points: 100, color: 'monitoring', activated: false },
      {
        body: 'List 3 causes of hypoglycemia (Low Blood Sugar)', answer: '', points: 200, color: 'monitoring', activated: false
      },
      {
        body: 'Name 3 circumstances that would be helpful to check blood sugars', answer: '',

        points: 300, color: 'monitoring', activated: false
      },
      {
        body: 'What is BG reading that is considered \"low\"? How many grams of fast acting sugar is appropriate to treat this?\
         Please give examples', answer: '',
        points: 400, color: 'monitoring', activated: false
      },
      {
        body: 'List 3 guidelines for driving and diabetes', answer: '',
        points: 500, color: 'monitoring', activated: false
      }
    ]
  },
  {
    name: 'targets', questions: [
      {
        body: 'What is the target for blood glucose before a meal?', answer: '',
        points: 100, color: 'targets', activated: false
      },
      {
        body: 'What is the target for blood glucose 2 hours after a meal?', answer: '',
        points: 200, color: 'targets', activated: false
      },
      {
        body: 'What is the target for A1C? How often should it be monitored?', answer: '',
        points: 300, color: 'targets', activated: false
      },
      {
        body: 'What is the target for blood pressure?', answer: '',
        points: 400, color: 'targets', activated: false
      },
      {
        body: 'What is the target for \"lousy cholesterol\"? What is this type of cholesterol called?', answer: '',
        points: 500, color: 'targets', activated: false
      }
    ]
  },
  {
    name: 'nutrition', questions: [
      {
        body: 'Why is it important to include protein at each meal? Please list 3 types\
         of vegetarian (non-meat) protein sources', answer: '',
        points: 100, color: 'nutrition', activated: false
      },
      {
        body: 'What are 2 ways you can lower cholesterol with food? eg. eat more ___ and eat less ___', answer: '',
        points: 200, color: 'nutrition', activated: false
      },
      {
        body: 'How many grams of carbohydrates should an average meal contain?', answer: '',
        points: 300, color: 'nutrition', activated: false
      },
      {
        body: 'Why is it important to include more fiber?', answer: '',
        points: 400, color: 'nutrition', activated: false
      },
      {
        body: 'What is the optimal spacing of meals for best blood sugar control\
         and how soon after waking up should you have breakfast?', answer: '',
        points: 500, color: 'nutrition', activated: false
      }
    ]
  },
  {
    name: 'exercise', questions: [
      {
        body: 'When is the best time to exercise in relation to a meal?', answer: '',
        points: 100, color: 'exercise', activated: false
      },
      {
        body: 'List  3 types of exercises that are recommended', answer: '',
        points: 200, color: 'exercise', activated: false
      },
      {
        body: 'What type of exercise has the most impact on your blood sugar?', answer: '',
        points: 300, color: 'exercise', activated: false
      },
      {
        body: 'List 5 ways that exercise can positively affect your health', answer: '',
        points: 400, color: 'exercise', activated: false
      },
      {
        body: 'How many minutes of each type of exercise does the Diabetes Canada recommend per week?', answer: '',
        points: 500, color: 'exercise', activated: false
      }
    ]
  },
  {
    name: 'complications', questions: [
      {
        body: 'Name 4 complications people living with diabetes are at risk for', answer: '',
        points: 100, color: 'complications', activated: false
      },
      {
        body: 'What are \"ABC\'s\" of diabetes? Why are they important?', answer: '',
        points: 200, color: 'complications', activated: false
      },
      {
        body: 'Name 5 self care measures to keep feet healthy', answer: '',
        points: 300, color: 'complications', activated: false
      },
      {
        body: 'Name 4 screening examinations for diabetes complications', answer: '',
        points: 400, color: 'complications', activated: false
      },
      {
        body: 'What are signs of nerve damage in feet and what causes it?', answer: '',
        points: 500, color: 'complications', activated: false
      }
    ]
  },
  {
    name: 'bonus', questions: [
      {
        body: 'When my blood glucose is at target, I can stop taking my diabetes medication. True or False?', answer: '',
        points: 100, color: 'bonus', activated: false
      },
      {
        body: 'If I take insulin, I have transformed from type 2 to type 1 diabetes. True or False?', answer: '',
        points: 200, color: 'bonus', activated: false
      },
      {
        body: 'What medications decrease the amount of new glucose produced by the\
         liver and makes muscle and fat cells more sensitive to insulin?', answer: '',
        points: 300, color: 'bonus', activated: false
      },
      {
        body: 'What medications work by making cells in the pancreas produce more insulin?', answer: '',
        points: 400, color: 'bonus', activated: false
      },
      {
        body: 'Name a pill that should not be taken if you’ve missed your meal', answer: '',
        points: 500, color: 'bonus', activated: false
      }
    ]
  }
];

// }
