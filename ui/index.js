import { Formio } from 'formiojs';

Formio.builder(document.getElementById('builder'), {}, {}).then(function (builder) {
    builder.on('saveComponent', function () {
        console.log(builder.schema);
    });
});