import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games-service.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.sass']
})
export class DiscussionComponent implements OnInit {
  currentGameID : number; 
  currentCompetitionID: number;
  constructor(private gamesService: GamesService) {
    this.currentGameID = history.state.data.gameID
  }

  ngOnInit(): void { 
      this.gamesService.getSingleMatch(this.currentGameID).subscribe(response => {
        let match: any = response;
        console.log(match);
      })

      this.gamesService.getSingleCompetition(this.currentCompetitionID).subscribe(response => {
        let competitionObj : any = response;
        
      })
  }

}
