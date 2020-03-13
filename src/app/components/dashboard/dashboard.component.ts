import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { GamesService } from 'src/app/services/games-service.service';
import * as moment from 'moment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  myControl: FormControl = new FormControl();
  searchText : string = "" 
  currentCompetitionID : number;
  filteredOptions: Observable<string[]>;
  competitions : any[] = [];
  weeklyGames: any[] = [];
  topDiscussions: any;
  followers: any;

  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );

    this.gamesService.getCompetitions().subscribe(response => {
      let competitionObj: any = response;
      this.competitions = competitionObj.competitions.filter(x => x.plan === 'TIER_ONE'); 
      this.getCompetitionDetails(2021);
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

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.competitions.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getCompetitionDetails(id: number){
    this.currentCompetitionID = id;
    this.gamesService.getSingleCompetition(id).subscribe(response => {
      let gamesObj: any = response;
      console.log(gamesObj);
      let now = moment();

      //Pick current week games from the competition 
      this.weeklyGames = gamesObj.matches.filter(game => {
        let matchDate = moment(game.utcDate);
        let isThisWeek = (now.isoWeek() == matchDate.isoWeek()) 
        return isThisWeek; 
      }); 
      
      this.gamesService.getTeams(id).subscribe(response => {
        let responseObj : any = response;
        this.weeklyGames.map(game => {
          responseObj.teams.map(team => {
            if(game.homeTeam.id == team.id){
              game.homeTeam.crest = team.crestUrl;
            }
            if(game.awayTeam.id == team.id){
              game.awayTeam.crest = team.crestUrl;
            }
          })
        });
      }) 
      


      console.log(this.weeklyGames);
    }) 
  }

  joinDiscussion(id: number){
    this.router.navigate(['/discussion'], {state: {data: {"gameID":id, "competitionID" : this.currentCompetitionID}}}); 
  }
 
}
