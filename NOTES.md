- create a nextjs app
- create a git repo on github
- check local repo on remote status 
`git remote -v`
`git add --all`
`git commit -m "initial commit"`
`git push origin main --force`


- shadcn you need to see the usage and download needed components
- in src > app > layout.tsx {children} means that everything defined in the page.tsx same directory 
with the layout.tsx will be rendered in {children}


        onUpload={(results: CldUploadWidgetResults) => {
          if (results.info && typeof results.info === 'object') {
            const publicId = (results.info as { public_id?: string }).public_id;
            if (publicId) {
              console.log(publicId);
              setImageId(publicId);
            }
          }
        }}

- remove use-client in here to use this as a react server component