import React from 'react'
import Terminal from '../Terminal/Terminal'
function Aboutme() {
    const head=()=>{
        var x="Hello! I'm Balraj. I'm learning full stack development. Currently in 3rd year, I believe artificial intelligence will inevitably rule us all one day. You should hire me!";
        return x;
    }
    const skillsContent="javascript\nreact\ngit\ngithub\nnodejs\nexpressjs\ncss\nhtml\nMongoDB\nData structures & Algos";
    const skills="🎭 gaming\n📖 reading\n🎥 movies\n🌶 cooking";
    return (
    <div>
        <Terminal heading="balrajsingh $"
         heading2="cd about me"  
         content="aboutbalraj" 
         content1="(main)" 
         content2="$" 
         maincontent={head()} 
         />
        <Terminal heading="balrajsingh $"
         heading2="cd skills/tools"  
         content="aboutbalraj" 
         content1="(main)" 
         content2="$" 
         maincontent={skillsContent}
         formatNewline={true}
          />
          <Terminal heading="balrajsingh $"
         heading2="cd hobbies/interests"  
         content="aboutbalraj" 
         content1="(main)" 
         content2="$" 
         maincontent={skills}
         formatNewline={true}
          />
    </div>
  )
}

export default Aboutme