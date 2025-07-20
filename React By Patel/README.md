<!-- 
 
          All Important Notes related to React J.S

   Script tag ko hmesa just body se uper lgtae hai

   React ko apne project me daalne ke lie cdn link ka use kr skte hai ye bhi ek method hai 
   (2) npx create-react-app se bhi react ko use kr skte hai
   (3) vite se bhi react use kr skte hai.

  

Question: What is cross origin
   cross orgin resosource sharing  means it helps to sharing the resources from a particular resource.



--  React me element create krne ke lie---
 <script>
    const h1=React.createElement("h1",{class:"heading1"},"I am react code")
</script>

mtlb ye teen parameter leta hai with comma separated.



             # Second method for react app  DAY_01

(1)  What is Bundler?

Helps to provide muscles for react code. It has mainly 3 types
(a) webpack=npx create-react-app
 (b)vite=npm create vite@latest
(c)parcel= it is a package manager;



^ -- It is called carrot which related to minor updates in package versions.
~ -- It is called tillday which related to majot updates in package versions.

Always it is a best practice to use carrot sign.


(2) What is jsx ?
Jsx is a html like code and browser do not understand directly ,it used babel to convert the jsx code to react code.

(3) What is components?
It is nothing but a piece odf code that is like a function.
Components is written in basically two ways 
(A) Class based components
(B) Functional based components

How to call a component: We can follow up three method to render components
<Heading1/>
<Heading1></Heading1>
{Heading1()}






How to add css in react?

Here is multiple way to add it.
(1)By Creating as a object

const styled={
dispay:"flex",
justify-content:"center",
background-color:"Red"
}

phir is styled object ko {styled} me lga ka element pe lga dte hai


(2) Ek inline method jo ki style lga ke krte hai 
style{{
dispay:"flex",
justify-content:"center",
background-color:"Red"
}}

          Class No -05  Import and export in React 

file ko import aue export krne ke lie do method hai 

export ke lie 
(1) default export
(2)named export

in dono me maim diffrence ye hai ki named export curly braces me kisi file me import hota hai 

jb ek hi file me multiple varibles/componets hai to ukso named export se hi use kiya jata hai kyu ki kisi bhi file me ek hi barr  default export ho skta hai.




        # Class No -06
React Reconciliation or React Fiber--

Why react is fast ?
Ans - Due to react reconciliation and diff algorithm.

Virtual Dom- Actual represention of real dom ,it means it is blueprint of real dom.

Diff algorithm -- Find the difference between real dom and virtual dom.

reconciliation- re-rendering of ui compents after change the state od real dom.


Hooks in react- (1) useEffect hook- it takes two parameter ,first is function and second is array dependency

use effect hook ka  empty array dependency case me , only once time called when component rendered.

Arry dependcy me jo bhi pass krte hai to jb bhi use effect call hota hai ,array dependcy bhi excecute hota hai.


use state hook ko kisi bhi condtions statemnts , loop me passs nhi kr skte hai. 


        # Class No -10;
         React Router Dom-Outlet components

Router install kro
createBrowserRouter me ([{}]) array me object pass krte hai with path and children.
phir RouterProvider ka use krte hai main file me

      


 #   Class No -11 Dyanamic Routings.

 first we have to  use useParams and it will help to geth the id of products.



        # Class -13 React life cycle methods

13,14,15 smjhna hai phir se..




         # Class -16 Custom Hooks in react

It hepls to treating the components. 


  #  class -17 Tailwind css in react js
 successfully completed this
  



               # Class -18 Higher order Components


 Not completed



        # Class No-20 Context API and Props Drilling

(a) Pass the data from one component to other ,other to another component is called props drilling.

(b) Props data always pass from parent to child components.


          # Class No-21 Redux Toolkit



It manage data layer of the UI   
                                                                                                                      



-->


