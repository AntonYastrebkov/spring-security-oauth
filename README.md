#### Simple example of OAuth2 authorization

#### Modules
`authorization-server` - authorization module based on Spring Security Oauth2 library; implements sign in/sign up logic, token generation and verification

`resource-one` - resource server based on Spring Security Oauth2 library; has one REST endpoint `/resource/foo/{id}`

`resource-two` - second resource server based on latest Spring Security 5.2 stack; has one REST endpoint `/resource2/get`

`angular-client` - client app based on Angular JS framework