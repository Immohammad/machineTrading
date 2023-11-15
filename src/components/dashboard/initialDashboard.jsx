import React from 'react'
import Ath from './ath'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faChartLine, faRuler, faBook, faUserAstronaut, faLock } from '@fortawesome/free-solid-svg-icons'

function InitialDashboard() {
  return (
    <div style={{ width: '80%' }}>
      <table id='dashboardProfile'>
        <tbody>
          <tr>
            <td>نام و نام خانوادگی : هوشنگ نصیرنژاد</td>
            <td style={{ borderRight: '1px solid black', borderLeft: '1px solid black' }}>ایمیل : mo.movahedinia@gmail.com</td>
            <td>شماره موبایل : 09115001000</td>
          </tr>
        </tbody>
      </table>
      <div className='servicesDashboard'>
        <button style={{ backgroundColor: '#e31228' }}>پیش‌بینی نمودار <br /><FontAwesomeIcon icon={faChartLine} beatFade /></button>
        <button style={{ backgroundColor: '#8cc73c' }}>تابلوخوانی<br /><FontAwesomeIcon icon={faClipboardList} beatFade /></button>
        <button style={{ backgroundColor: '#334456' }}>تحلیل تکنیکال <br /><FontAwesomeIcon icon={faRuler} /><br /><FontAwesomeIcon icon={faLock} /></button>
        <button style={{ backgroundColor: 'white', color: '#334456' }}>تحلیل بنیادی <br /><FontAwesomeIcon icon={faBook} /><br /><FontAwesomeIcon icon={faLock} /></button>
        <button style={{ background: 'linear-gradient(to right, #e31228, #8cc73c, #334456, white)' }}>پکیج کامل <br /><FontAwesomeIcon icon={faUserAstronaut} /><br /><FontAwesomeIcon icon={faLock} /></button>
      </div>
      <hr style={{ marginRight: 'auto', marginLeft: 'auto', width: '60%' }} />
      <h3>جدول فاصله سهام تا ATH (سقف تاریخی)</h3>
      <Ath />
    </div>
  )
}

export default InitialDashboard