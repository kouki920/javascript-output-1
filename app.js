const quiz = [
  {question: 'ゲーム市場、最も売れたゲームはどれ？',
  answers: ["ファミコン","PS2","スイッチ","DS"],
  correct: "DS"},

  {question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
  answers: ['MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
  correct: 'MOTHER2'},

  {question: 'ファイナルファンタジーⅣの主人公の名前は？',
  answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
  correct: 'セシル'},

  {question: '櫻坂46初のシングルでセンターを務めるメンバーの名前は？',
  answers: ['山崎天', '渡邉理佐', '森田ひかる', '小林由依'],
  correct: '森田ひかる'}
];
// 共通の変数や定数はまとめる
let quizIndex = 0;

const quizLength = quiz.length;
// HTML要素を含む変数や定数は＄を頭につける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

let score = 0;

// クイズの問題文、選択肢を関数を使って定義
const setupQuiz = ()=>{
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonInedx = 0;
while(buttonInedx < buttonLength){
  $button[buttonInedx].textContent = quiz[quizIndex].answers[buttonInedx]; 
  buttonInedx++;
}
}
setupQuiz();

// 問題複数作成時、関数を拡張させた
const clickHandler =(e)=>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quizLength){
// 関数あればこちらを実行
    setupQuiz();
  }else{
// 関数なければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です');
  }


}
// 引数eは引き継ぐ
// handleindex=buttonindex番号
let handleindex = 0;
while(handleindex < buttonLength){
  $button[handleindex].addEventListener('click',(e) => {
    clickHandler(e);
});
handleindex++;
}
