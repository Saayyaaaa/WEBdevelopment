from django.http import JsonResponse
from .models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    companies_json = [p.to_json() for p in companies]
    return JsonResponse(companies_json, safe=False)


def get_company(request, id):
    companies = Company.objects.get(id=id)
    data = companies.to_json()
    return JsonResponse(data)


def vacancies_by_company(request, id):
    companies = [company.to_json() for company in Company.objects.filter(id=id)]
    return JsonResponse(companies, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [p.to_json() for p in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def get_vacancy(request, id):
    vacancies = Vacancy.objects.get(id=id)
    data = vacancies.to_json()
    return JsonResponse(data)

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('salary')[:10]
    vacancies_list = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_list, safe=False)