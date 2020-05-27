import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    app_name = "Creative Training"

    constructor(private api : ApiService) { }

    ngOnInit() {
        this.api.getposts().subscribe( data => { this.posts = data } );
        this.api.getComments().subscribe( data => { this.comments = data } );
    }

    posts = []


    comments = []

    displayComments = false
    commentToDisplay = []
    postToDisplay = {
        id: 0,
        title: "",
        body: ""
    }

    titleToAdd = ""
    bodyToAdd = ""

    searchText = ""

    commentText = ""

    getCommentsNumber(postID) {
        let tempComments = this.comments.filter(comment => comment.postId == postID);
        return tempComments.length;
    }

    getComments(postID) {
        this.displayComments = true
        this.commentToDisplay = this.comments.filter(comment => comment.postId == postID);
        let tempPost = this.posts.find(post => post.id == postID);
        this.postToDisplay = tempPost
    }

    goBackToPosts() {
        this.commentToDisplay = []
        this.postToDisplay = {
            id: 0,
            title: "",
            body: ""
        }
        this.displayComments = false
    }

    showAddPostForm(){
        this.displayComments = false
    }
    
    addPost() {
        /*let postToAdd = {
            id: 0,
            title: "",
            body: ""
        }

        if (this.posts.length == 0) {
            postToAdd.id = 1
        } else {
            postToAdd.id = this.posts[this.posts.length - 1].id + 1
        }

        postToAdd.title = this.titleToAdd;
        postToAdd.body = this.bodyToAdd;

        this.posts.push(postToAdd);

        this.titleToAdd = "";
        this.bodyToAdd = "";*/

        let postToAdd = {
            title: this.titleToAdd,
            body: this.bodyToAdd
        }

        this.api.addPost(postToAdd).subscribe( result => {
            this.posts.push(result);
            this.titleToAdd = "";
            this.bodyToAdd = "";
        } )    
        

    }

    delete(postToDelete) {
        this.posts = this.posts.filter(post => post != postToDelete)
        this.comments = this.comments.filter(comment => comment.postId != postToDelete.id)
    }

    addComment(postId) {
        let commentid = 0
        if (this.comments.length == 0) {
            commentid = 1
        } else {
            commentid = this.comments[this.comments.length - 1].id + 1
        }
        
        let commentToAdd = {
            "postId": postId,
            "id": commentid,
            "name": "rayen",
            "email": "rayenmhamdi94@gmail.com",
            "body": this.commentText
        }
        this.comments.push(commentToAdd)
        this.commentText = ""
        this.getComments(postId)
    }
}
