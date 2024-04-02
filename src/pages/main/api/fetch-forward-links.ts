import axios from 'axios'

interface IFetchForwardLinksResponse {
  label: string
  href: string
}

export function fetchForwardLinks() {
  const url =
    'https://script.googleusercontent.com/macros/echo?user_content_key=f9leWx2aufSsiP5VhjI3EVnwAn_WqGy2NY5FyL2xsdT60QPYy-ShGl-qjec0o1I6vmN8Tx7vjFSan06dSm7GmC8I_h_adU67m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCfJqaB7zpO-uuI-jH3zkepGvq4IJhe6jHmzWUjJeiXt1yjjfXa2IlCB5fbBNVQfDmQjfqjiKJAtJyfFaT9yXnXRoCDDEEbDhQ&lib=MOtSVkB-oNoNTd3MnGZxn7Gg5QWNUmqwZ'

  return axios
    .get<IFetchForwardLinksResponse[]>(url)
    .then((response) => response.data)
}
