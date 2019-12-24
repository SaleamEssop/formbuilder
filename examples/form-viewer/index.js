import "formiojs/dist/formio.full.min.css"
import { Formio } from 'formiojs';
import $ from "jquery";
let schema = {
  components: []
};
const apiUrl = 'http://localhost:3000/form/';

async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

window.onload = async function() {
  const hash = window.location.hash
  const id = hash ? hash.substr(1) : '5e00efe106fec91fa01155a4';
  const form = await getData(apiUrl + id);
  console.log(form)
  const schema = form.structure;
  Formio.createForm(document.getElementById('form-view'), schema).then(console.log)
}
