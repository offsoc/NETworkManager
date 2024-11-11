"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[3767],{6216:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"changelog/2023-6-27-0","title":"2023.6.27.0","description":"Version: 2023.6.27.0","source":"@site/docs/changelog/2023-6-27-0.md","sourceDirName":"changelog","slug":"/changelog/2023-6-27-0","permalink":"/NETworkManager/docs/changelog/2023-6-27-0","draft":false,"unlisted":false,"editUrl":"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/changelog/2023-6-27-0.md","tags":[],"version":"current","sidebarPosition":992,"frontMatter":{"sidebar_position":992},"sidebar":"docsSidebar","previous":{"title":"2023.6.21.1","permalink":"/NETworkManager/docs/changelog/2023-6-27-1"},"next":{"title":"2023.4.26.0","permalink":"/NETworkManager/docs/changelog/2023-4-26-0"}}');var i=r(4848),s=r(8453);const t={sidebar_position:992},l="2023.6.27.0",h={},a=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bugfixes",id:"bugfixes",level:2},{value:"Deprecated",id:"deprecated",level:2},{value:"Dependencies, Refactoring &amp; Documentation",id:"dependencies-refactoring--documentation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"20236270",children:"2023.6.27.0"})}),"\n",(0,i.jsxs)(n.p,{children:["Version: ",(0,i.jsx)(n.strong,{children:"2023.6.27.0"}),(0,i.jsx)("br",{}),"\nRelease date: ",(0,i.jsx)(n.strong,{children:"27.06.2023"})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"File"}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"SHA256"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2023.6.27.0/NETworkManager_2023.6.27.0_Setup.exe",children:(0,i.jsx)(n.code,{children:"NETworkManager_2023.6.27.0_Setup.exe"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"664A6BA437C27415E1ED69A57CA4D4435C8EF077C1556ABC9267517A93D48C08"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2023.6.27.0/NETworkManager_2023.6.27.0_Portable.zip",children:(0,i.jsx)(n.code,{children:"NETworkManager_2023.6.27.0_Portable.zip"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"D356874DD353864C164B2136B893A8B798A8C236990E44F3F222EF1260FDF040"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2023.6.27.0/NETworkManager_2023.6.27.0_Archive.zip",children:(0,i.jsx)(n.code,{children:"NETworkManager_2023.6.27.0_Archive.zip"})})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"2FC80F329A5B8C9B2EA79A0C11619EB32383802F180C7CF0FA720B4064B6E0B3"})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"System requirements"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Windows 10 / Server x64 (1809 or later)"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dotnet.microsoft.com/download/dotnet/6.0",children:".NET Desktop Runtime 6.x (LTS)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AWS Session Manager","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Setting ",(0,i.jsx)(n.code,{children:"Default profile"})," changed to ",(0,i.jsx)(n.code,{children:"Profile"}),". You need to set the profile again ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2299",children:"#2299"})]}),"\n",(0,i.jsxs)(n.li,{children:["Setting ",(0,i.jsx)(n.code,{children:"Default region"})," changed to ",(0,i.jsx)(n.code,{children:"Region"}),". You need to set the region again ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2299",children:"#2299"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DNS Lookup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Improved validation when adding/changing DNS server profiles ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2282",children:"#2282"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote Desktop"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Allow ",(0,i.jsx)(n.code,{children:"."})," as domain to authenticate with local accounts ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2305",children:"#2305"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PuTTY"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Improve validation in connect, profile and group dialog ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2352",children:"#2352"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TigerVNC"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use port from default config instead of settings if creating a new group ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2249",children:"#2249"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SNTP Lookup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Improved validation when adding/changing SNTP server profiles ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2282",children:"#2282"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Wake on LAN"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Change default port from 7 to 9 ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2242",children:"#2242"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Group dialog","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Show an error next to the tab if the settings on the page contain errors ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2309",children:"#2309"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Profile dialog","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Show an error next to the tab if the settings on the page contain errors ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2309",children:"#2309"})]}),"\n",(0,i.jsxs)(n.li,{children:["SNMP options are now validates (same as group) ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2309",children:"#2309"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Log program update check & errors to the log file ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2329",children:"#2329"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bugfixes",children:"Bugfixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DNS Lookup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed app crash when editing DNS server profile in some rare cases ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2282",children:"#2282"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote Desktop"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Adjust screen"})," via Context Menu now only adjusts the screen size if ",(0,i.jsx)(n.code,{children:"Adjust screen automatically"})," or ",(0,i.jsx)(n.code,{children:"Use the current view size as the screen size"})," is enabled ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2318",children:"#2318"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"PuTTY"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add missing baud rates for serial connection ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2337",children:"#2337"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fix wrong cli parameters passed when mode does not match (e.g. SSH key for telnet) ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2352",children:"#2352"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fix wrong icon in profile context menu ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2352",children:"#2352"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SNTP Lookup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fix app crash when editing SNTP server profile in some rare cases ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2282",children:"#2282"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Subnet Calculator"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fix a design issue with the calculate button in subnetting ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2230",children:"#2230"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/AirspaceFixer",children:"AirSpace Fixer"})," code optimized (only called if needed). This will also prevent a screenshot bug when the application is loading and a dialog is shown. ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2253",children:"#2253"})]}),"\n",(0,i.jsxs)(n.li,{children:["Group dialog","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fix default value for Remote Desktop sreen size ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2293",children:"#2293"})]}),"\n",(0,i.jsxs)(n.li,{children:["Enable Remote Desktop ",(0,i.jsx)(n.code,{children:"Use gateway credentials"})," only if logon method is set to ",(0,i.jsx)(n.code,{children:"Userpass"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2316",children:"#2316"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Profile dialog","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fix default value for Remote Desktop sreen size ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2293",children:"#2293"})]}),"\n",(0,i.jsxs)(n.li,{children:["Enable Remote Desktop ",(0,i.jsx)(n.code,{children:"Use gateway credentials"})," only if logon method is set to ",(0,i.jsx)(n.code,{children:"Userpass"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2316",children:"#2316"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fix validation rule for TigerVNC port ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2309",children:"#2309"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Settings","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Settings view is now re-selected if the filter (search) is removed ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2325",children:"#2325"})]}),"\n",(0,i.jsxs)(n.li,{children:["If settings are opened again, the last selected settings view is now selected (except an application was selected that has a settings view, then the settings view of the application is selected) ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2325",children:"#2325"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deprecated",children:"Deprecated"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Profile","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Wake on LAN port, because it was inconsistent (If you select the profile, the port from the settings was used. If you right-click on the profile, the port from the profile was used) ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2220",children:"#2220"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dependencies-refactoring--documentation",children:"Dependencies, Refactoring & Documentation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Code cleanup ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2100",children:"#2100"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2172",children:"#2172"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2254",children:"#2254"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2325",children:"#2325"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language files updated via ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Ftransifex-integration",children:"#transifex"})]}),"\n",(0,i.jsxs)(n.li,{children:["Dependencies updated via ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Fdependabot",children:"#dependabot"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add documentation for:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Application > Port Scanner ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2265",children:"#2265"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > Ping Monitor ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2267",children:"#2267"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > Traceroute ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2268",children:"#2268"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > DNS Lookup ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2273",children:"#2273"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > Remote Desktop ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2293",children:"#2293"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2324",children:"#2324"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > PowerShell ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2249",children:"#2249"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2324",children:"#2324"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > PuTTY ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2324",children:"#2324"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2337",children:"#2337"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > TigerVNC ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2248",children:"#2248"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2324",children:"#2324"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > Web Console ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2244",children:"#2244"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2324",children:"#2324"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > SNMP ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2289",children:"#2289"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2293",children:"#2293"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > Wake on LAN ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2242",children:"#2242"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > Whois ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2236",children:"#2236"})]}),"\n",(0,i.jsxs)(n.li,{children:["Application > Subnet Calculator ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2233",children:"#2233"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Update documentation for:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Application > AWS Session Manager ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2299",children:"#2299"})," ",(0,i.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2324",children:"#2324"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var o=r(6540);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);