import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWelcomeComponent } from '@components/section-welcome/section-welcome.component';
import { SectionIntroComponent } from '@components/section-intro/section-intro.component';
import { SectionAboutComponent } from '@components/section-about/section-about.component';
import { SectionFeaturesComponent } from '@components/section-features/section-features.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
    selector: 'hb-root',
    standalone: true,
    imports: [
        CommonModule,
        SectionWelcomeComponent,
        SectionIntroComponent,
        SectionAboutComponent,
        SectionFeaturesComponent,
        FooterComponent,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
