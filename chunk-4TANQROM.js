import{M as a}from"./chunk-7KWF5R5E.js";var r=class t{isAuthenticated=!1;authSecretKey="Bearer Token";constructor(){this.isAuthenticated=!!localStorage.getItem(this.authSecretKey)}login(i,e){return i==="admin"&&e==="admin"?(localStorage.setItem(this.authSecretKey,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA"),this.isAuthenticated=!0,!0):!1}isAuthenticatedUser(){return this.isAuthenticated}logout(){localStorage.removeItem(this.authSecretKey),this.isAuthenticated=!1}static \u0275fac=function(e){return new(e||t)};static \u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})};export{r as a};
