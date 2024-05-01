import Header from '../Header'
import PieChartCode from '../PieChartCode'

import './index.css'

const Summary = () => (
  <>
    <Header />
    <div className="summary-div">
      <h1 className="summary-h1">Task Summary</h1>
      <PieChartCode />
    </div>
  </>
)

export default Summary
