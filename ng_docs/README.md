# Angular 6

## Ciclo de vida de Componente

<table width="100%">
  <colgroup><col width="20%">
  <col width="80%">
  </colgroup><tbody><tr>
    <th></font></font></th>
    <th>Propósito e Fase</font></font></th>
  </tr>
  <tr>
    <td>
      <code>ngOnChanges()</code>
    </td>
    <td>
<p>Responder quando Angular (re) define propriedades de entrada vinculadas a dados. </font><font style="vertical-align: inherit;">O método recebe um </font></font><code><a href="api/core/SimpleChanges" class="code-anchor">SimpleChanges</a></code> de valores de propriedade atuais e anteriores.</font></font></p>
<p>Chamado antes </font></font><code>ngOnInit()</code>re que uma ou mais propriedades de entrada ligadas a dados forem alteradas.</font></font></p>
    </td>
  </tr>
  <tr>
    <td>
      <code>ngOnInit()</code>
    </td>
    <td>
<p>Inicialize a diretiva / componente depois que o Angular exibir primeiro as propriedades vinculadas a dados e definir as propriedades de entrada da diretiva / componente.</font></font></p>
<p>Chamado </font></font><em>z</font></font></em>ois do </font></font><em>ro</font></font></em> <code>ngOnChanges()</code>nt></font></p>
    </td>
  </tr>
  <tr>
    <td>
      <code>ngDoCheck()</code>
    </td>
    <td>
<p>Detecte e aja de acordo com mudanças que o Angular não pode ou não detectará sozinho.</font></font></p>
<p>Chamado durante cada execução de detecção de mudança, imediatamente depois </font></font><code>ngOnChanges()</code>nt></font><code>ngOnInit()</code>t></font></p>
    </td>
  </tr>
  <tr>
    <td>
      <code>ngAfterContentInit()</code>
    </td>
    <td>
<p>Responda após o conteúdo externo dos projetos Angular na exibição do componente / na exibição em que uma diretiva está.</font></font></p>
<p>Chamado </font></font><em>z</font></font></em>o primeiro </font></font><code>ngDoCheck()</code>t></font></p>
    </td>
  </tr>
  <tr>
    <td>
      <code><a href="api/core/AfterContentChecked#ngAfterContentChecked" class="code-anchor">ngAfterContentChecked()</a></code>
    </td>
    <td>
<p>Responda após Angular verificar o conteúdo projetado na diretiva / componente.</font></font></p>
<p>Chamado após o </font></font><code>ngAfterContentInit()</code>s os subseqüentes </font></font><code>ngDoCheck()</code>t></font></p>
    </td>
  </tr>
  <tr>
    <td>
      <code>ngAfterViewInit()</code>
    </td>
    <td>
<p>Responder após Angular inicializa as exibições do componente e as exibições filhas / a exibição em que uma diretiva está.</font></font></p>
<p>Chamado </font></font><em>z</font></font></em>o primeiro </font></font><code><a href="api/core/AfterContentChecked#ngAfterContentChecked" class="code-anchor">ngAfterContentChecked()</a></code>t></font></p>
    </td>
  </tr>
  <tr>
    <td>
      <code><a href="api/core/AfterViewChecked#ngAfterViewChecked" class="code-anchor">ngAfterViewChecked()</a></code>
    </td>
    <td>
<p>Responder depois que o Angular verificar as exibições do componente e as exibições filhas / a exibição em que uma diretiva está.</font></font></p>
<p>Chamado após o </font></font><code>ngAfterViewInit</code>s os subseqüentes </font></font><code><a href="api/core/AfterContentChecked#ngAfterContentChecked" class="code-anchor">ngAfterContentChecked()</a></code>t></font></p>
    </td>
  </tr>
  <tr>
    <td>
      <code>ngOnDestroy()</code>
    </td>
    <td>
<p>Limpeza logo antes do Angular destruir a diretiva / componente. </font><font style="vertical-align: inherit;">Cancelar assinatura Observáveis &#8203;&#8203;e desanexar manipuladores de eventos para evitar vazamentos de memória.</font></font></p>
<p>Chamado </font></font><em>ntes do</font></font></em>ar destruir a diretiva / componente.</font></font></p>
    </td>
  </tr>
</tbody></table>