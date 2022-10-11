import React from "react";

const Blog = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 items-center">
        <div className="m-5 bg-slate-200 p-7 rounded-lg lg:w-3/6">
          <h2 className="text-2xl font-mono font-bold text-cyan-700">
            What is the purpose of react router?
          </h2>
          <p className="font-serif text-orange-600">
            A common library for routing in React is called React Router. It
            permits switching between views of different React Application
            components, permits changing the browser URL, and keeps the UI in
            sync with the URL. We only associate a component with a certain
            route, making our base component—often referred to as the App—clear,
            maintainable, and readable. Without router, either the state or the
            root component would be disorganized and challenging to manage.
          </p>
        </div>
        <div className="m-5 bg-slate-200 p-7 rounded-lg lg:w-3/6">
          <h2 className="text-2xl font-mono font-bold text-cyan-700">
            How does Context Api works?
          </h2>
          <p className="font-serif text-orange-600">
            An efficient approach for a React project to create global variables
            that can be passed around is through the React Context API. The
            alternative to "prop drilling" or passing along props from grandma
            to child to parent and so on is to do this. Context is also promoted
            as a simpler, lighter state management strategy when utilizing
            Redux. When several components at various nesting levels need to
            have access to a certain piece of data, context is generally used.
            Use it carefully as it makes component reuse more challenging.
            Component composition is frequently a simpler solution than context
            if you merely want to avoid providing some props over numerous
            levels.
          </p>
        </div>
        <div className="m-5 bg-slate-200 p-7 rounded-lg lg:w-3/6">
          <h2 className="text-2xl font-mono font-bold text-cyan-700">
            what is useref in react?
          </h2>
          <p className="font-serif text-orange-600">
            UseRef functions essentially as a "box" with a.current attribute
            that can store a mutable value. Refs may be most well-known to you
            as a mechanism to access the DOM. React will set its.current
            property to the associated DOM node anytime that node changes if you
            feed it a ref object using div ref=mybox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
