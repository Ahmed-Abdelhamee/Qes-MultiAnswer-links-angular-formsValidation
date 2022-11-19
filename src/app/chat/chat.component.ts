import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      let currentGfgStep, nextGfgStep, previousGfgStep;
      let opacity;
      let current = 1;
      let steps = $("fieldset").length;
      setProgressBar(current);
    
      $(".next-step").click(function () {
    
        currentGfgStep = $(this).parent();
        nextGfgStep = $(this).parent().next();
    
        $("#progressbar li").eq($("fieldset")
          .index(nextGfgStep)).addClass("active");
    
        nextGfgStep.show();
        currentGfgStep.animate({ opacity: 0 }, {
          step: function (now) {
            opacity = 1 - now;
    
            currentGfgStep.css({
              'display': 'none',
              'position': 'relative'
            });
            nextGfgStep.css({ 'opacity': opacity });
          },
          duration: 500
        });
        setProgressBar(++current);
      });
    
      $(".previous-step").click(function () {
    
        currentGfgStep = $(this).parent();
        previousGfgStep = $(this).parent().prev();
    
        $("#progressbar li").eq($("fieldset")
          .index(currentGfgStep)).removeClass("active");
    
        previousGfgStep.show();
    
        currentGfgStep.animate({ opacity: 0 }, {
          step: function (now) {
            opacity = 1 - now;
    
            currentGfgStep.css({
              'display': 'none',
              'position': 'relative'
            });
            previousGfgStep.css({ 'opacity': opacity });
          },
          duration: 500
        });
        setProgressBar(--current);
      });
    
      function setProgressBar(currentStep) {
        let percent = (100/steps) * current;

        percent =parseFloat( percent.toFixed());
        $(".progress-bar")
          .css("width", percent + "%")
      }
    
      $(".submit").click(function () {
        return false;
      })
    });
    
  }

}
