let n = 0
function render() {
  const items = [
    'tache1',
    'tache2',
    'tache2'
  ]
  const lis = items.map((item , k)=><li key={k}>{item}</li>)
  // on doit avoir un seul Element racine cest a dire un seul element qui englobe tout(ex:React.Fraguement)
  const title = <div>
    <h1 id="title" className="title">En utilisant babel <span>{n}</span></h1>
    <ul>{lis}</ul>
  </div>

  ReactDOM.render(title, document.getElementById("app"))
}
render()
window.setInterval(() => {
  n++
  render()
}, 1000)