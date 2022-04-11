import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChatClientService, ChannelService, MessageContext, CustomTemplatesService, ChannelPreviewContext, StreamI18nService } from 'stream-chat-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('customMessageTemplate') messageTemplate!: TemplateRef<MessageContext>;
  @ViewChild('customChannelPreviewTemplate') channelPreviewTemplate!: TemplateRef<ChannelPreviewContext>;

  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private customTemplatesService: CustomTemplatesService
  ) {
    const apiKey = '';
    const userId = '';
    const userToken = '';
    this.chatService.init(apiKey, userId, userToken);
    this.channelService.init({
      type: 'messaging',
      members: {$in: [userId]},
    });
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.customTemplatesService.messageTemplate$.next(this.messageTemplate);
    // this.customTemplatesService.channelPreviewTemplate$.next(this.channelPreviewTemplate);
  }
}
