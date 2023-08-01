import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { AdminPageComponent } from '@modules/admin/pages/admin-page/admin-page/admin-page.component';
import { AdminService } from '@modules/admin/services/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})

export class AddEditComponent implements OnInit {
  @Input() tracks: any[]=[]
  tracksTrending: Array<TrackModel> = []
  
  constructor(private adminService: AdminService, private  adminpage: AdminPageComponent){}

  ngOnInit(): void{
    //console.log('ok loadDataAll cargo')
    //this.loadDataAll()
  }

  //loadDataAll(): void{
    
    //this.adminService.getAllTracks$().subscribe((responseOk)=>{

   // })



//}
deleteTrack(id: number) {
  console.log('ok loadDataAll cargo')
  this.adminService.deleteTrack$(id).subscribe({
    next: (responseOk) => {
      this.adminpage.loadDataAll();
    },
    error: console.log,
  });
}

editTrack(item: any) {
  console.log('Llegamos al edit')
}


ngOnDestroy(): void {

}


}


