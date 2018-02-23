
Log 'log'
	= type:Type _* scope:Scope _* issues:Issues _* tag:Tag title:Title Newline Newline? body:Body
    {
    	return {
        	type,
            scope,
            issues,
            tag,
            title,
            body
        }
    }

Scope 'scope'
	= '(' scope:AlphaNumeric ')'
    {
    	return scope
    }

Type 'type'
	= type:TypeName
    {
    	return text()
    }

Issues 'issues'
	= issue:Issue
	/ issue:Issue rest:Issues
    {
    	return text()
    }

Issue 'issue'
	= '[#' id:AlphaNumeric ']'
    {
    	return id
    }

TypeName 'typeName'
	= 'fix'
    / 'test'
    / 'docs'
    {
    	return text()
    }

Tag 'tag'
	= [A-Z]+
    { return text() }

Title 'title'
	= [^\n]+
    { return text() }

AlphaNumeric 'alphanumeric'
	= ([A-Za-z0-9]+)
    { return text() }

Newline 'newline'
	= [\n\r]

Body 'body'
	= .*
    {
    	return text()
    }

_ 'whitespace'
	= [ \t\s\n\r]
