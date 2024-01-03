/* vendors_sentry.js:44 Refused to connect to 'https://jsonplaceholder.typicode.com/todos/1'
because it violates the document's Content Security Policy.
오류 발생시 node.js나 https://www.google.com/에서 실행 권장*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => console.log(response));
