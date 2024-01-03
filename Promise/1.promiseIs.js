/* vendors_sentry.js:44 Refused to connect to 'https://jsonplaceholder.typicode.com/todos/1'
because it violates the document's Content Security Policy.
오류 발생시 node.js나 https://www.google.com/에서 실행 권장*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => {console.log('첫 번째 then'); return response})
	.then((res) => {console.log('두 번째 then'); return res})
	.then((re) => {console.log(`세 번째 then, 앞 then의 리턴 사용 가능 : ${re}`); return re});
