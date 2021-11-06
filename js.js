let questions = [
	{
		text: 'вопрос 1?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];

let test = document.querySelector('#test');
let button = document.querySelector('#button');
let k = 0
for(let elem of questions){
    k++
    let p = document.createElement('p');
    p.innerHTML = elem.text;
    test.appendChild(p);

    for(let i=0;i<3;i++){
        let label = document.createElement('label');
        label.innerHTML = elem.variants[i];
        test.appendChild(label);

        let input = document.createElement('input');
        input.type = 'radio';
        input.setAttribute('name',k);
        if(i == elem.right){
            input.dataset.right = elem.variants[elem.right];
        };
        label.appendChild(input);
    };
    
};



button.addEventListener('click',function(){
    
    let inputs = document.querySelectorAll('#test input');

    for(let elem of inputs){

        if(elem.dataset.right != undefined && elem.checked == true){
                elem.classList.add('right')
                elem.classList.remove('wrong');
        }else if(elem.checked == true){
            elem.classList.add('wrong');
            elem.classList.remove('right');
        }

    }

});