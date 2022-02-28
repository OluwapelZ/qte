"nodemonConfig": { 
    "exec": "yarn start:dev",
    "watch": ["src/*", "public/*"],
    "ignore": ["**/__tests__/**", "*.test.js", "*.spec.js"]
}

// TODO: Use nodemon to start in dev mode

// soft-link to another document
// Quizzes Document
quizzes(obj instance): {
    _id: 'generated_id',
    user_id: user_generated_id(_id),
    quiz_title: 'Who dey check am',
    questions: [
        {
            id: 'question_own_generated',
            text: 'question text',
            options: [
                {
                    letter: 'A',
                    text: 'who dey check am',
                    correct: true,
                },
                {
                    letter: 'A',
                    text: 'who dey check am',
                    correct: false,
                },
                {
                    letter: 'A',
                    text: 'who dey check am',
                    correct: false,
                }
            ]
        },
        {
            id: 'question_own_generated',
            text: 'question text',
            options: [
                {
                    letter: 'A',
                    text: 'who dey check am',
                    correct: true,
                },
                {
                    letter: 'A',
                    text: 'who dey check am',
                    correct: false,
                },
                {
                    letter: 'A',
                    text: 'who dey check am',
                    correct: false,
                }
            ]
        },
    ]
}

// User Document
users(obj instance): {
    _id: 'mongo_generated_id',
    user_own_generated_id: 'auto-increment value',
    firstname: 'Hey you',
    lastname: 'hey hey you',
    email: 'hey hey you you' (unique),
    password: 'bcrypt encrypted'
    quizzes: [
        {
            _id: 'generated_id',
            // user_id: user_generated_id(_id),
            quiz_title: 'Who dey check am',
            questions: [
                {
                    id: 'question_own_generated',
                    text: 'question text',
                    options: [
                        {
                            letter: 'A',
                            text: 'who dey check am',
                            correct: true,
                        },
                        {
                            letter: 'A',
                            text: 'who dey check am',
                            correct: false,
                        },
                        {
                            letter: 'A',
                            text: 'who dey check am',
                            correct: false,
                        }
                    ]
                },
                {
                    id: 'question_own_generated',
                    text: 'question text',
                    options: [
                        {
                            letter: 'A',
                            text: 'who dey check am',
                            correct: true,
                        },
                        {
                            letter: 'A',
                            text: 'who dey check am',
                            correct: false,
                        },
                        {
                            letter: 'A',
                            text: 'who dey check am',
                            correct: false,
                        }
                    ]
                },
            ]
        }
    ]
}

```
Most NoSQL databases do not support JOINs between multiple records - so you are left with a few different ways to model relationships.

Normalizing (Referencing)
As you mentioned, you could leave a soft-link to another document... and then resolve the reference with a follow-up query.

Generally, you'd normalize data that you'd want to optimize for writes.

Note: In DocumentDB, you can reduce the cost associated with multiple network requests in the context of follow-up queries by using a stored procedure. This allows you to perform a sequence of operations as a single network request.

De-normalizing (Embedding)
Alternatively, you could embed related data as JSON objects. This eliminates the need to resolve references with follow-up queries; but may introduce complexities when mutating data (e.g. fanning out a write to multiple records).

Generally, you'd normalize data you'd want to optimize for reads.
```

```
MongoDB's replication facility, called replica set, provides: automatic failovers and data redundancy
```

```
Exclude docs in production env level
```

Questions:
- User can view basic stats on quiz attempts/completion/scores e.t.c
    - Is this stats for a user to see stats of all quizzes attempted or
    - For users to see stats of everyone that has taken his/her quizzes over time.

    ## Start Application
    #### With Docker
    On initial Run
    `docker-compose build`
    then: 
    `docker-compose up`

    On Subsequent run just `docker-compose up` does the trick

    #### Without Docker
    `yarn start:dev`