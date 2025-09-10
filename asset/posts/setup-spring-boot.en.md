<h2 style="text-align: center; color:  #8ab4f8; margin-bottom:3%;">How to install Spring boot</h2>

1. install scoop
    > ` Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

    > `Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression`

2. install java
    > `scoop bucket add java extras main`

    > `scoop install java/openjdk21 extras/springboot main/maven main/gradle`

3. install IntelliJ IDEA ultimate
    > `scoop install extras/idea-ultimate`

    See more in [scoop](https://scoop.sh/)