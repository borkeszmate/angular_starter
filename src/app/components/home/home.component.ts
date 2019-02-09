import { Component, OnInit, AfterViewInit } from '@angular/core';
import fullpage from 'fullpage.js';

declare var fullpage_api;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

	fullPageInstance: fullpage;

	constructor() { //
	}

	ngOnInit() {
	//
	}

	ngAfterViewInit() {

		this.fullPageInstance = new fullpage('#fullpage', {
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			navigation: true,
			navigationPosition: 'right',
			touchSensitivity: 12,
			scrollOverflow: true,
			scrollOverflowOptions: {
				scrollbars: false,
			},
			normalScrollElements: '.scrollable-element',
			sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],

			afterLoad: () => {
				// this.angulartics2.eventTrack.next({
				// 	action: 'active',
				// 	properties: {
				// 		category: 'Témakörök',
				// 		label: `Slide_${fullpage_api.getActiveSection().anchor}`
				// 	}
				// });
			}
		});
	}
}
