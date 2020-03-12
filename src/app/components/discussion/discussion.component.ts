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
  match: any; 
  headToHead: any;
  standings: any[];

  constructor(private gamesService: GamesService) {
    this.currentGameID = history.state.data.gameID;
    this.currentCompetitionID = history.state.data.competitionID;
  }

  ngOnInit(): void { 
      this.gamesService.getSingleMatch(this.currentGameID).subscribe(response => {
        let responseObj : any = response;
        this.match = responseObj.match;
        this.headToHead = responseObj.head2head;
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
  }

}
