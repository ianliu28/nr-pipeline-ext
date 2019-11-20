"use strict";
const expect = require("expect");
const Git = require('../lib/GitVerification')

describe("git module", function() {
   this.timeout(50000);
   context("On running git --version", function() {
      it.only("version can be obtained", function() {
         const gitObj = new Git()

         return gitObj.run(['--version']).then(proc=>{
            console.log(proc.stdout)
            expect(proc.stdout).toBe("git version 2.21.0 (Apple Git-122)\n")
         })
      })
   });

});

describe("git module", function() {
    this.timeout(50000);
    context("On running git merge-base", function() {
       it.only("commitHash can be obtained", function() {
          const gitObj = new Git()
 
          return gitObj.getMergeBase('release/0.0.1','master').then(commitHash=>{
             expect(commitHash).toBeDefined()
          })
       })
    });
 
 });

 describe("git module", function() {
    this.timeout(50000);
    context("On running git ls-remote", function() {
       it.only("latest commit hash on master can be obtained", function() {
          const gitObj = new Git()
 
          return gitObj.getLatestCommitOnMaster().then(commitHash=>{
             expect(commitHash).toBeDefined()
          })
       })
    });
 
 });

 describe("git module", function() {
    this.timeout(50000);
    context("On running verify", function() {
       it.only("verify if branches can be merged", function() {
          const gitObj = new Git()
 
          return gitObj.verify('release/0.0.1','master').then(result=>{
             expect(result).toBe('True')
          })
       })
    });
 
 });

 describe("git module", function() {
    this.timeout(50000);
    context("On running verify", function() {
       it.only("verify if branches can be merged", function() {
          const gitObj = new Git()
 
          return gitObj.verify('feature/add-backup-recovery-to-basicOracleDatabaseDeployment','release/0.0.1').then(result=>{
             expect(result).toBe('False')
          })
       })
    });
 
 });