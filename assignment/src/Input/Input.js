import React from 'react'

const input = (outprops) => {
    return (<div>
        <input type="text" onChange={outprops.changed} value={outprops.currentName}>

        </input>
    </div>
    )
}

export default input;

db.createCollection('posts', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
                title: {
                    bsonType: "string",
                    description: "must be a string"
                },
                text: {
                    bsonType: "string",
                    description: "must be a string"
                },
                creator: {
                    bsonType: "objectId",
                    description: "must be object"
                },
                comments: {
                    bsonType: "array",
                    description: "must be an array",
                    items: {
                        bsonType: "objectId",
                        required: ["text", "author"],
                        properties: {
                            text: {
                                bsonType: "string",
                                description: "must be a text"
                            },
                            author: {
                                bsonType: "objectId",
                                description: "must be object"
                            }
                        }
                    }
                }
            }
        }
    }
})

db.posts.insertOne(
    {
        title: "First Post",
        text: "This is the testing post for me",
        tags: ["new", "tech"],
        creator: ObjectId("5e944a4b15ebc623019f4c4d"),
        comments: [
            {
                text: "I like this post",
                 author: ObjectId("5e944a4b15ebc623019f4c4e")
            }
        ]
    })            