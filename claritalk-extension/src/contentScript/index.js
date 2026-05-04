function checkAndShowPopup() {
  if (window.location.pathname.endsWith('/present')) {
    if (document.getElementById('claritalk-popup')) return

    const url = window.location.pathname
    const parts = url.split('/')
    const firmId = parts[2]
    const companyId = parts[3]

    const claritalkUrl = `https://app.claritalk.com/create-conversation?company_id=${companyId}&firm_id=${firmId}&locale=nl`

    const card = document.createElement('div')
    card.innerHTML = `
      <div id="claritalk-popup">
        <h2>Meeting starten in Claritalk?</h2>
        <p>Koppel dit Silverfin dossier aan een nieuw gesprek in Claritalk.</p>
        <div id="claritalk-buttons">
          <button id="claritalk-yes">Ja, start een meeting</button>
          <button id="claritalk-no">Nee</button>
        </div>
      </div>
    `

    const style = document.createElement('style')
    style.id = 'claritalk-styles'
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600&family=Funnel+Display:wght@500&display=swap');

      #claritalk-popup {
        position: fixed;
        top: 24px;
        right: 24px;
        background: #ffffff;
        border: 1px solid #F4F4F5;
        border-radius: 5px;
        padding: 24px;
        box-shadow: 0 2px 8px rgba(48,22,58,0.08);
        z-index: 99999;
        width: 25rem;
      }
      #claritalk-popup h2 {
        font-family: 'Funnel Display', sans-serif;
        font-size: 18px;
        color: #30163A;
        margin: 0 0 8px 0;
      }
      #claritalk-popup p {
        font-family: 'Syne', sans-serif;
        font-size: 13px;
        color: #30163A;
        opacity: 0.7;
        margin: 0 0 20px 0;
      }
      #claritalk-buttons {
        display: flex;
        gap: 10px;
      }
      #claritalk-yes, #claritalk-no {
        flex: 1;
        padding: 8px 16px;
        border: none;
        border-radius: 5px;
        font-family: 'Syne', sans-serif;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      #claritalk-yes {
        background: #682577;
        color: #ffffff;
      }
      #claritalk-yes:hover { background: #521b66; }
      #claritalk-no {
        background: #FDE594;
        color: #30163A;
      }
      #claritalk-no:hover { background: #d9bd6c; }
    `

    if (!document.getElementById('claritalk-styles')) {
      document.head.appendChild(style)
    }

    document.body.appendChild(card)

    document.getElementById('claritalk-yes').addEventListener('click', () => {
      window.open(claritalkUrl, '_blank')
      card.remove()
    })

    document.getElementById('claritalk-no').addEventListener('click', () => {
      card.remove()
    })
  }
}

checkAndShowPopup()

document.addEventListener('turbolinks:load', checkAndShowPopup)
document.addEventListener('turbolinks:render', checkAndShowPopup)
