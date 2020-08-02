import Asciidoctor from 'asciidoctor';

const asciidoctor = Asciidoctor();

asciidoctor.convertFile('doc/project.adoc', {
  safe: 'safe',
  attributes: {
    linkcss: true
  }
});