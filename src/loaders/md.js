// var MarkdownIt = require('markdown-it'),
// 	md = new MarkdownIt();
// var result = md.render('# markdown-it rulezz!');
// console.log('result: ', result);

// var md = require('markdown-it')();
// var result = md.renderInline('__markdown-it__ rulezz!');

var hljs = require('highlight.js'); // https://highlightjs.org/

// 通常的默认值们
var md = require('markdown-it')({
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return (
					'<pre class="hljs"><code>' +
					hljs.highlight(lang, str, true).value +
					'</code></pre>'
				);
			} catch (__) {}
		}

		return (
			'<pre class="hljs"><code>' +
			md.utils.escapeHtml(str) +
			'</code></pre>'
		);
	},
});

console.log('md: ', md);
console.log('result: ', result);
