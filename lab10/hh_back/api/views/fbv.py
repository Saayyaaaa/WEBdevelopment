import json

from django.http import JsonResponse
from .models import Company, Vacancy

from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

from hh_back.api.serializers import CompanySerializer2

@api_view(["GET", "POST"])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)



@api_view(["GET", "PUT", "DELETE"])
def get_company(request, id):

    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({"error": str(e)},
                        status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializer2(company)
        data = serializer.data
        return Response(data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer2(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        return Response({"deleted": True})

@api_view
def vacancies_by_company(request, id):
    try:
        companies = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)})

    companies_json = [companies.to_json() for companies in Company.objects.filter()]
    return JsonResponse(companies_json, safe=False)


@api_view
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [p.to_json() for p in vacancies]
        return JsonResponse(vacancies_json, safe=False)


@api_view
def get_vacancy(request, id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.get(id=id)
        data = vacancies.to_json()
        return JsonResponse(data)


@api_view
def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        vacancies_list = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_list, safe=False)
