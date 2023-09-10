import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ColDef, GridApi, GridReadyEvent, IDateFilterParams, INumberFilterParams } from 'ag-grid-community';
import { IOlympicData } from '../interfaces';
import { OpenAiApiService } from '../shared/chat-service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  standalone: true,
  imports: [SharedModule,AgGridModule, HttpClientModule,
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PersonalComponent implements OnInit {
  userMessage!: string;
  sentMessage!: string;
  assistantReply!: string;
  chatMessages: { role: string, content: string }[] = [];
  public loading :boolean = false;
  public isLoading:boolean = false;
  
  constructor(private fb: FormBuilder,private http: HttpClient,private openAiApiService: OpenAiApiService) {}

  ngOnInit(): void {

   
    
 
  
}

sendMessage() {
  const userMessage = this.userMessage;
  this.isLoading = true;
  this.chatMessages.push({ role: 'user', content: userMessage });
 
  this.openAiApiService.sendMessage(this.userMessage)
    .subscribe(response => {
      console.log(response)
      this.isLoading = false;
    //  let response = {"data":" UST is a technology company that provides cloud solutions and services to help businesses accelerate their cloud transformation and quickly produce business value. UST also provides AI-powered cognitive automation platforms to help businesses reimagine their business processes and increase their operations efficiency."}
      this.assistantReply = response['data'];
      this.chatMessages.push({ role: 'assistant', content: this.assistantReply });
      this.sentMessage = userMessage
      console.log(this.chatMessages)
      this.userMessage = '';
    });
}
}



