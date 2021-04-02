import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

// Exporting these files into the Client Library, then add 'Client.' in html 
export {
    checkForName,
    handleSubmit
}