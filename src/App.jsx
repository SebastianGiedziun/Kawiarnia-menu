import './App.css'
import CoffeeList from './CoffeeList'

const coffeeData = [
  { id: 1, name: "espresso", type: "espresso", description: "mocno skoncentrowany napój kawowy, uzyskiwany przez przetłoczenie gorącej wody pod wysokim ciśnieniem przez drobno zmielone ziarna kawy", isNew: true },
  { id: 2, name: "Cold brew Coffee", type: "mrożona", description: "Kawa mrożona to orzeźwiający napój na bazie schłodzonej kawy, często z dodatkiem lodu, mleka, syropów smakowych lub bitej śmietany. Idealna na gorące dni – pobudza i chłodzi jednocześnie.", isNew: false },
  { id: 3, name: "Caffe americano", type: "americano", description: "Americano to klasyczna kawa przygotowywana przez dolanie gorącej wody do espresso. Dzięki temu ma łagodniejszy smak niż czyste espresso, ale zachowuje jego aromat i intensywność. Idealna dla tych, którzy lubią czarną kawę, ale preferują mniej skoncentrowany napar.", isNew: false },
  { id: 4, name: "Caffe latte", type: "Latte", description: "Latte to delikatna kawa na bazie espresso, do której dodaje się dużą ilość spienionego mleka. Ma łagodny smak i kremową konsystencję, często serwowana w wysokiej szklance. Popularna zarówno na ciepło, jak i w wersji mrożonej.", isNew: false },
  { id: 5, name: "Flat white", type: "Flat white", description: "Flat white to kawa na bazie espresso z cienką warstwą aksamitnie spienionego mleka. Ma intensywny smak kawy, ale łagodniejszy niż espresso, dzięki mleku. Serwowana zazwyczaj w mniejszej filiżance niż latte, z gładką, kremową konsystencją.", isNew: true },
  { id: 6, name: "Caffe Mocha", type: "Mocha", description: "Mocha to aromatyczna kawa łącząca espresso, gorącą czekoladę i spienione mleko. Ma intensywny, czekoladowy smak z nutą kawy, często podawana z bitą śmietaną na wierzchu. Idealna dla miłośników słodkich, kremowych napojów.", isNew: true },
]

function App() {

  return (
    <div id="app">
      <CoffeeList dataArray={coffeeData} />
    </div>

  )
}

export default App
