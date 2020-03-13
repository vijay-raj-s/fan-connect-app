import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games-service.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.sass']
})
export class DiscussionComponent implements OnInit {
  currentGameID : number; 
  currentCompetitionID: number;
  match: any; 
  headToHead: any;
  standings: any[];
  postDescription: string = "";
  posts: Post[] = [];
  topDiscussions: any;
  followers: any;

  constructor(private gamesService: GamesService) {
    this.currentGameID = history.state.data.gameID;
    this.currentCompetitionID = history.state.data.competitionID;
  }

  ngOnInit(): void { 
      this.gamesService.getSingleMatch(this.currentGameID).subscribe(response => {
        let responseObj : any = response;
        this.match = responseObj.match;
        this.headToHead = responseObj.head2head;
        

        this.gamesService.getTeams(this.currentCompetitionID).subscribe(response => {
          let responseObj : any = response;
          
            responseObj.teams.map(team => {
              if(this.match.homeTeam.id == team.id){
                this.match.homeTeam.crest = team.crestUrl;
              }
              if(this.match.awayTeam.id == team.id){
                this.match.awayTeam.crest = team.crestUrl;
              }
            })
          
        }) 
        console.log('Match and Head to head');
        console.log(this.match);
        console.log(this.headToHead);
      })

      this.gamesService.getStandings(this.currentCompetitionID).subscribe(response => {
        let standingsObj : any = response;
        this.standings = standingsObj.standings[0].table;
        console.log('Standings');
        console.log(this.standings);
      })

      this.gamesService.getTopDiscussions().subscribe(response => {
        this.topDiscussions = response;
        console.log(response);
      })


      this.gamesService.getFollowers().subscribe(response => {
        this.followers = response;
        console.log(response);
      })
  }

  postData(){
      let post = {
        "description": this.postDescription,
        "profile_img" : "assets/images/profile-img.svg",
        "prediction_home" : 3,
        "prediction_away" : 2,
        "user_name" : "Kristen Stewart",
        "credibility": 4
      }
      this.posts.push(post); 
      this.postDescription = "";

  }

}
