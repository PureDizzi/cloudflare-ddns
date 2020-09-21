<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/PureDizzi/cloudflare-ddns">
    <img src="images/cf-logo-v-rgb.jpg" alt="Logo" width="720" height="240">
  </a>

  <h3 align="center">Cloudflare DDNS</h3>

  <p align="center">
    Change your Cloudflare DNS records to your current IP address.
  </p>
</p>


<!-- GETTING STARTED -->
## Getting Started

Make a note of your 'Global API Key' from https://dash.cloudflare.com/profile/api-tokens


### Installation

1. Clone the repo
```sh
git clone https://github.com/PureDizzi/cloudflare-ddns.git
```
2. Install NPM packages
```sh
npm install
```
3. Enter your API in `config.js`
```json
{
    "email": "ENTER YOUR EMAIL",
    "globalAPIKey": "ENTER YOUR API",
}
```
3. Run script to see available records
```sh
npm run records
```
4. Enter the records that you want to be changed in `config.js`
```json
{
    "records": [
        {
            "id": "ENTER RECORD ID",
            "zoneId": "ENTER ZONE ID",
            "name": "ENTER ZONE NAME",
            "type": "A",
            "ttl": 1,
            "proxied": false
        }
    ]
}
```



<!-- USAGE EXAMPLES -->
## Usage

```sh
npm run start
```

_You will want to set a scheduled task on your system to run this application everyday._



<!-- CONTACT -->
## Contact

Marcus Nardizzi - [@MarcusNardizzi](https://twitter.com/MarcusNardizzi) - marcusnardizzi@gmail.com

Project Link: [https://github.com/PureDizzi/cloudflare-ddns](https://github.com/PureDizzi/cloudflare-ddns)

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/PureDizzi/cloudflare-ddns.svg?style=for-the-badge
[contributors-url]: https://github.com/PureDizzi/cloudflare-ddns/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PureDizzi/cloudflare-ddns?style=for-the-badge
[forks-url]: https://github.com/PureDizzi/cloudflare-ddns/network
[stars-shield]: https://img.shields.io/github/stars/PureDizzi/cloudflare-ddns?style=for-the-badge
[stars-url]: https://github.com/PureDizzi/cloudflare-ddns/stargazers
[issues-shield]: https://img.shields.io/github/issues/PureDizzi/cloudflare-ddns?style=for-the-badge
[issues-url]: https://github.com/PureDizzi/cloudflare-ddns/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=555&style=for-the-badge&
[linkedin-url]: https://www.linkedin.com/in/marcusnardizzi/
