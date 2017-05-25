import { AppComponent } from './app.component';
import { AppHeaderComponent } from './appheader.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
    let de: DebugElement;
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, AppHeaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h3'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected <h1> text', () => {
        fixture.detectChanges();
        const h3 = de.nativeElement;
        expect(h3.innerText).toMatch(/angular/i,
            '<h3> should say something about "Angular"');
    });
    it('should have the name', () => {
        fixture.detectChanges();
        const h3 = de.nativeElement;
        expect(comp.name).toBeDefined();
    });
});
