import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    app_name = "Creative Training"

    constructor() { }

    ngOnInit() {
    }

    posts = [
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }
    ]


    comments = [

        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        },
        {
            "postId": 2,
            "id": 6,
            "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
            "email": "Presley.Mueller@myrl.com",
            "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
        },
        {
            "postId": 2,
            "id": 7,
            "name": "repellat consequatur praesentium vel minus molestias voluptatum",
            "email": "Dallas@ole.me",
            "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
        },
        {
            "postId": 2,
            "id": 8,
            "name": "et omnis dolorem",
            "email": "Mallory_Kunze@marie.org",
            "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
        },
        {
            "postId": 2,
            "id": 9,
            "name": "provident id voluptas",
            "email": "Meghan_Littel@rene.us",
            "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
        },
        {
            "postId": 2,
            "id": 10,
            "name": "eaque et deleniti atque tenetur ut quo ut",
            "email": "Carmen_Keeling@caroline.name",
            "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
        },
        {
            "postId": 3,
            "id": 11,
            "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
            "email": "Veronica_Goodwin@timmothy.net",
            "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
        },
        {
            "postId": 3,
            "id": 12,
            "name": "modi ut eos dolores illum nam dolor",
            "email": "Oswald.Vandervort@leanne.org",
            "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
        },
        {
            "postId": 3,
            "id": 13,
            "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
            "email": "Kariane@jadyn.tv",
            "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
        },
        {
            "postId": 3,
            "id": 14,
            "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
            "email": "Nathan@solon.io",
            "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
        },
        {
            "postId": 3,
            "id": 15,
            "name": "debitis magnam hic odit aut ullam nostrum tenetur",
            "email": "Maynard.Hodkiewicz@roberta.com",
            "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
        },
        {
            "postId": 4,
            "id": 16,
            "name": "perferendis temporibus delectus optio ea eum ratione dolorum",
            "email": "Christine@ayana.info",
            "body": "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis"
        },
        {
            "postId": 4,
            "id": 17,
            "name": "eos est animi quis",
            "email": "Preston_Hudson@blaise.tv",
            "body": "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"
        },
        {
            "postId": 4,
            "id": 18,
            "name": "aut et tenetur ducimus illum aut nulla ab",
            "email": "Vincenza_Klocko@albertha.name",
            "body": "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias"
        },
        {
            "postId": 4,
            "id": 19,
            "name": "sed impedit rerum quia et et inventore unde officiis",
            "email": "Madelynn.Gorczany@darion.biz",
            "body": "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut"
        },
    ]

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
        let postToAdd = {
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
        this.bodyToAdd = "";

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
