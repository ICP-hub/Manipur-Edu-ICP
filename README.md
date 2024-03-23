VERSIONS
Node Version 18
DFX Version 0.15.2-beta.2
Setup Local Internet Identity
dfx deps pull
dfx deps init internet_identity --argument '(null)'
dfx deps deploy

RUN Commands
dfx start --background
dfx deploy


GSS