# How to visualize a branch of the project on a local server

First, you have to make sure to have [bun](https://bun.sh/docs/installation) installed on your computer.

For Windows user, it is preferable to install [wsl](https://learn.microsoft.com/en-us/windows/wsl/install) too. 

You also want to make sure you have [nvm](https://github.com/nvm-sh/nvm) and you are using node **version 18 or later**.

And for our pp-front project, you will need a correct .env file, which looks like this : 

```
SUPABASE_URL="https://cgsszvazemkfneqlgpkb.supabase.co/"
SUPABASE_KEY="XXXXX"
NUXT_UI_PRO_LICENSE=XXXXX
NUXT_PUBLIC_BACKEND_FORCED=https://api.dev.paxpar.io
```
Once those requirements are complete, you can now visualize your project by following this procedure :

**1.** Clone the project in one of your repository <br>
```git clone project-URL/SSH ```

**2.** Go to the project you have just cloned <br>
```cd name-of-the-project```

**3.** Go to the specific branch you want to visualize <br>
```git switch branch-name ```

**4.** Make sure your repository is up to date <br>
```git pull ```

**5.** Install/reinstall bun to have all the needed dependencies <br>
```bun install```

**6.** If everything went well until there, you can start the local server to visualize the project <br>
```bun run dev```

**7.** The last step is to open a browser and type the URL : http://localhost:3000