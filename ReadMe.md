## Quiz Templating Engine
#### Core Features
- Users can create an account
- Users can create their own quiz with multiple questions & answers.
- Users cannot manipulate other users' quiz templates.
- Users can attempt other users' published quizzes as many times as they choose.
- Users can view basic stats on quiz attempts/completion/scores/etc..
- Quizzes must contain at least 1 question and should support varying numbers of questions.
- Questions must have a non-empty question and a non-empty answer
- Each submitted quiz should have it's questions marked correct or incorrect based on the predefined answers.

## Documentation
```
Please check the root director for the postman collection and environment files for easy testing.
```

## Start Application
#### With Docker
On initial Run
`docker-compose build`
then: 
`docker-compose up`

On Subsequent run just `docker-compose up` does the trick

#### Without Docker
`yarn start:dev`