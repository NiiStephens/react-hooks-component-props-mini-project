import React from "react";
import Article from "./Article";

//Make an article List
//Create a main element
//the main element should have an array of articleList
//ArticleList should be passed down as a prop

function ArticleList ({ posts }) {
    // let array = []
    // let arrayElements = array.map((array)) => {
    //     return <li key ={articleItem} 
    // }
    return (
        <main>
            {
                posts.map ((item)=> {
                    return (
                        < React.Fragment key = {item.id}>
                        <Article title = {item.title} preview ={item.preview} date = {item.date} minutes = {item.minutes}  />
                        </React.Fragment>
                        
                    )
                })
            }

        </main>
    )
}

export default ArticleList;