using System.Linq;
using System;
using System.Globalization;
using System.Collections.Generic;

namespace CSharp
{
    class MyFormatter : IFormatProvider, ICustomFormatter
    {
        public string Format(string format, object arg, IFormatProvider formatProvider)
        {
            switch (format.ToUpper())
            {
                case "CUSTOM":
                    if (arg is short || arg is int || arg is long)
                        return arg.ToString();
                    if (arg is Single || arg is Double)
                        return String.Format("{0:0.00}", arg);
                    break;
                // Handle other
                default:
                    try
                    {
                        return HandleOtherFormats(format, arg);
                    }
                    catch (FormatException e)
                    {
                        throw new FormatException(String.Format("The format of '{0}' is invalid.", format), e);
                    }
            }
            return arg.ToString(); // only as a last resort
        }

        private string HandleOtherFormats(string format, object arg)
        {
            if (arg is IFormattable)
                return ((IFormattable)arg).ToString(format, CultureInfo.CurrentCulture);
            if (arg != null)
                return arg.ToString();
            return String.Empty;
        }

        public object GetFormat(Type formatType)
        {
            if (formatType == typeof(ICustomFormatter))
                return this;
            return null;
        }
    }
    class Program
    {
        static Program()
        {
            rString = "E";
        }
        static readonly string rString = "D";
        private const string cString = "London";
        delegate int delegateWithReturn(int input1, int input2);
        delegate void delegateWithVoid(int input1, int input2);
        static void Main(string[] args)
        {
            Console.WriteLine("{0:C}", 10);
            Console.WriteLine("{0:00.0}", 10);
            Console.WriteLine("{0:0}", 10);
            Console.WriteLine("{0:0.00}", 10.1);
            Console.WriteLine("{0:0}", 10.0);
            Console.WriteLine("{0:0}", 10.1);
            Console.WriteLine("{0:0.00}", 10.1);

            // works
            Console.WriteLine(String.Format(new MyFormatter(), "{0:custom}", 9));
            Console.WriteLine(String.Format(new MyFormatter(), "{0:custom}", 9.1));

            Console.WriteLine(Convert.ToBase64String(Guid.NewGuid().ToByteArray()));
            Console.ReadKey();
            int[] intArray1 = new int[] { 1, 2, 3, 4, 5 };
            int[] intArray2 = { 1, 2, 3, 4, 5 };
            int[] intArray3 = new int[5];

            string message = "World!";
            message.Insert(0, "Hello ");
            Console.WriteLine(message);

            Nullable<int> nint1;
            int? nint2;

            for (var i = 1; i <= 5; i++)
            {
                Console.WriteLine(i);
                if (i == 1)
                    continue;

                if (i == 3)
                    break;
            }

            Console.WriteLine(rString);

            new DerivedClass().OverrideMethod();

            Person person = new Employee();
            person.ShowMessage();


            var list = new List<Employee>() { new Employee { Name = "D" } };

            var result = list.Where(x => x.Name == "D");

            var result1 = intArray1.Where(x => x > 3).ToList();

            Action<string> myAction = str => { Console.WriteLine(str); };

            ShowMessage(myAction);

            Person person1 = new Person { Age = 1 };
            Method(person1);
            Console.WriteLine(person1.Age.ToString());

            int value = 5;
            message = "";

            do
            {
                value += 2;
                message = message + value.ToString() + " ";
            } while (value <= 10);

            Console.WriteLine(message);

            var gen = new Generic<Worker>();

            Console.ReadKey();

            // Find more than 50% repeated number
            var numberArray = new int[] { 1, 2, 3, 4, 5, 2, 2, 2, 2 };
            var resulte = numberArray.GroupBy(x => x).Where(grp => grp.Count() >= numberArray.Length / 2).Select(grp => grp.Key).FirstOrDefault();
            Console.WriteLine(resulte);

            // Delegates
            //// using named methods
            delegateWithReturn dwr = new delegateWithReturn(Add);
            Console.WriteLine(dwr(1, 2));
            delegateWithVoid dwv = new delegateWithVoid(AddVoid);
            dwv(2, 3);

            //// using anonymous methods
            dwr = delegate (int input1, int input2) { return input1 + input2; };
            Console.WriteLine(dwr(3, 4));

            //// using lambda expressions
            dwr = (int input1, int input2) => { return input1 + input2; };
            Console.WriteLine(dwr(4, 5));

            //// Actions
            Action<int, int> action = (input1, input2) => { Console.WriteLine(input1 + input2); };
            action(5, 6);

            //// Predicate 
            Predicate<int> predicate = (num) => (num > 2);
            var results = numberArray.ToList().Find(predicate);
            Console.WriteLine(results);

            //// Func<>
            Func<int, bool> func = (num) => (num > 2);
            var result2 = numberArray.ToList().Where(func);
            Console.WriteLine(result2.LastOrDefault());
            Func<int, int, int> funcreturn = (num1, num2) => { return num1 + num2; };
            Console.WriteLine(funcreturn(7, 8));


            Console.ReadKey();
        }

        private static int Add(int input1, int input2)
        {
            return input1 + input2;
        }
        private static void AddVoid(int input1, int input2)
        {
            Console.WriteLine(input1 + input2);
        }

        public static void Method(Person person)
        {
            person = new Person { Age = 100 };
        }

        public static void ShowMessage(Action<string> action)
        {
            const string message = "This is the ShowMessage method!";
            action(message);
        }

        class BaseClass
        {
            public virtual void OverrideMethod()
            {
                Console.WriteLine("Base");
            }
        }

        class DerivedClass : BaseClass
        {
            public override void OverrideMethod()
            {
                Console.WriteLine("Derived");
            }
        }
        public abstract class MyClass
        {
            public abstract void SomeMethod();

            public virtual void SomeMethod1()
            {

            }
        }

        public class Person
        {
            public int Age { get; set; }
            public string Name { get; set; }
            public virtual void ShowMessage()
            {
                Console.WriteLine("Person.ShowMessage");
            }
        }

        public class Employee : Person
        {
            public override void ShowMessage()
            {
                Console.WriteLine("Employee.ShowMessage");
            }
        }

        public class Worker : Person
        {
            public override void ShowMessage()
            {
                Console.WriteLine("Employee.ShowMessage");
            }
        }

        public class Generic<T> where T : Person
        {

        }
    }
}