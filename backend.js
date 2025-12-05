
class LoginPopup {
  constructor() {
      this.loginBtn = document.querySelector(".login_btn");
      this.modal = document.getElementById("login_modal");
      this.closeBtn = document.getElementById("close_login");

      this.addEvents();
  }

  addEvents() {
      this.loginBtn.addEventListener("click", () => this.open());
      this.closeBtn.addEventListener("click", () => this.close());
      window.addEventListener("click", (e) => {
          if (e.target === this.modal) this.close();
      });
  }

  open() {
      this.modal.style.display = "flex";
  }

  close() {
      this.modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new LoginPopup();
  new ScrollButtons();
});

class ScrollButtons {
  constructor() {
      this.getStartedBtn = document.getElementById("btnGetStarted");
      this.demoBtn = document.getElementById("btnDemo");

      this.featuresSection = document.getElementById("Features");
      this.visualSection = document.getElementById("Visual");

      this.addEvents();
  }

  addEvents() {
      
      this.getStartedBtn.addEventListener("click", () => {
          this.featuresSection.scrollIntoView({ behavior: "smooth" });
      });


      this.demoBtn.addEventListener("click", () => {
          this.visualSection.scrollIntoView({ behavior: "smooth" });
      });
  }
}
