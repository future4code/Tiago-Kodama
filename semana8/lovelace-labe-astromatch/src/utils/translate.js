import axios from 'axios'
import {translateURL} from '../constants/rapidAPI'

async function englishToPortuguese(text){
    try {
        const options = {
            method: 'POST',
            url: translateURL,
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-key': '4b3a452826msh742903192d79ac4p1f2704jsn2c2287fdf21b',
              'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
            },
            data: {q: text, source: 'en', target: 'pt'}
          };
    
          const res = await axios.request(options)
          return res.data.data.translations.translatedText
        
    } catch (error) {
        console.error(error)
        return 
    }
}

async function portugueseToEnglish(text){
    try {
        const options = {
            method: 'POST',
            url: translateURL,
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-key': '4b3a452826msh742903192d79ac4p1f2704jsn2c2287fdf21b',
              'x-rapidapi-host': 'deep-translate1.p.rapidapi.com'
            },
            data: {q: text, source: 'pt', target: 'en'}
          };

        const res = await axios.request(options)
        return res.data.data.translations.translatedText
        
    } catch (error) {
        console.error(error)
        return 'erro'
    }
}

export {englishToPortuguese, portugueseToEnglish}